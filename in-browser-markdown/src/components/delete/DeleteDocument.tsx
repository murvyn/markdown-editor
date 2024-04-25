import { useContext, useEffect, useRef, useState } from "react";
import { Button, Text } from "../nav/nav.styles";
import { ContentContext } from "../../contexts/contentContext";
import { Background, DeleteBox, VStack } from "./delete.styles";
import { Container } from "../main.styles";
import { FileManagerContext } from "../../contexts/fIleManagerContext";

const DeleteDocument = ({setShowDeleteCard}: {setShowDeleteCard: React.Dispatch<React.SetStateAction<boolean>>}) => {
  const { fileName, mode, id } = useContext(ContentContext);
  const {deleteFile} = useContext(FileManagerContext)
  const deleteCardRef = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState(true)

  const handleDelete = async () => {
    try{
      setLoading(true)
      await deleteFile(id)
      console.log('deleted')
    }catch(err){
      console.log(err)
    }finally{
      setLoading(false)
      setShowDeleteCard(false)
    }
  }

  useEffect(() =>{
    const handler = (e: MouseEvent) => {
      if(deleteCardRef.current && !deleteCardRef.current.contains(e.target as Node)){
        setShowDeleteCard(false)
        console.log(deleteCardRef.current)
      }
    }
    document.addEventListener('mousedown', handler)

    return()=>{
      document.removeEventListener('mousedown', handler)
    }
  })
  
  return (
    <Background mode={mode} >
      <DeleteBox mode={mode} ref={deleteCardRef} className="">
        <Container className="">
          <VStack>

          <Text mode={mode} fontStyle="previewH4">Delete this document?</Text>
          <Text mode={mode} fontStyle="previewPara">
            Are you sure you want to delete the ‘<span>{fileName}</span>’
            document and its contents? This action cannot be reversed.
          </Text>
          <Button onClick={handleDelete} width="100%" >
            <Text fontStyle="headingMed">Confirm & Delete</Text>
          </Button>
          </VStack>
        </Container>
      </DeleteBox>
    </Background>
  );
};

export default DeleteDocument;
