import { yupResolver } from "@hookform/resolvers/yup"
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup"
import { Image } from "@phosphor-icons/react";
import {Container,Form,InputGroup,Label,Input,LabelUpload, SubmitButton, Select,ErrorMessage,ContainerCheck,} from './styles';
import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";



const schema = yup
  .object({
    name: yup.string().required('Digite o nome do produto'),
    price: yup.number().integer().required('Digite o preço do produto').typeError('Digite o preço do produto'),
    category: yup.object().required('Escolha uma categoria '),
    offer:yup.bool(),
    file: yup.mixed()
    .test('required','Escolha um arquivo para continuar',(value)=>{
      return value && value.length > 0;
    }).test('fileSize','Carregue arquivos até 5mb',(value)=>{
      return value && value.length > 0 && value[0].size <=50000;
    }).test('type','Carregue apenas iamgens PNG ou JPEG ',(value) =>{
      return value && value.length > 0 &&
      (value[0].type === 'image/jpeg'|| value[0].type === 'image/png')
    }),
  })
 

export function NewProducts(){
     const [fileName, setFileName] = useState(null);
      const [categories, setCategories] = useState([]);
       const navigate = useNavigate();
        useEffect(()=>{
           async function LoadCategories(){
               const {data} = await api.get('/categories');
               setCategories(data)
           }
              LoadCategories();

        },[])

    const {
      control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = async (data) =>{
      const productFormData = new FormData();
          productFormData.append('name',data.name);
           productFormData.append('price',data.price* 100);
            productFormData.append('categoty_id',data.category.id);
             productFormData.append('file',data.file[0]);
              productFormData.append('offer',data.offer);
              await toast.promise(api.post("/products",productFormData),{
                 pending:'Adicionando o produto...',
                 success:'Produto criado comsucesso',
                 error:'Falha ao adicionar o produto, tente novamente',
              });
              setTimeout(() => {
                navigate('/admin/produtos')
              }, 2000);
  };
     
   
return (

    <Container>

        <Form  onSubmit={handleSubmit(onSubmit)}>
         <InputGroup>
         <Label>Nome</Label>
         <Input type="text" {...register("name")}  />
         <ErrorMessage>{errors?.name?.message}</ErrorMessage>
         </InputGroup>


          <InputGroup>
         <Label>Preço</Label>
         <Input type="number" {...register("price")}  />
         <ErrorMessage>{errors?.price?.message}</ErrorMessage>
         </InputGroup>

          <InputGroup>
             <LabelUpload>
              <Image/>
               <input 
               type='file'
               {...register("file")}
               accept="image/png, image/jpeg"
               onChange={(value)=>{
                   setFileName(value?.target.files[0]?.name);
                   register("file").onChange(value)
               }}
        
               />
               {fileName || 'Upload do Produto'}
             </LabelUpload>
             <ErrorMessage>{errors?.file?.message}</ErrorMessage>
             <InputGroup>
               <Label>Categoria</Label>
               <Controller  
               name='category'
               control={control}
               render={({field})=>(
               <Select 
               {...field}
                  options={categories}
                  getOptionLabel={(category)=>category.name}
                  getOptionValue={(category)=>category.id}
                  menuPortalTarget={document.body}

               />
               )}
               />
               <ErrorMessage>{errors?.category?.message}</ErrorMessage>
             </InputGroup>
                          <InputGroup>
                                <ContainerCheck>
                                  <input  type="Checkbox"{...register('offer')} /> 
                                  <Label> Produto em Oferta ?</Label>
                                 
                               </ContainerCheck>             
                             </InputGroup>
         </InputGroup>
          {<SubmitButton>Adicionar Produtos</SubmitButton> }
        </Form>
    </Container>
);

}