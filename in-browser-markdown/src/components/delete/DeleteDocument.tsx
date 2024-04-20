import { useContext, useEffect, useRef } from "react";
import { Button, Text } from "../nav/nav.styles";
import { ContentContext } from "../../contexts/contentContext";
import { Background, DeleteBox, VStack } from "./delete.styles";
import { Container } from "../main.styles";

const DeleteDocument = ({setShowDeleteCard}: {setShowDeleteCard: React.Dispatch<React.SetStateAction<boolean>>}) => {
  const { fileName } = useContext(ContentContext);
  const deleteCardRef = useRef<HTMLDivElement>(null)

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
    <Background >
      <DeleteBox ref={deleteCardRef} className="">
        <Container className="">
          <VStack>

          <Text fontStyle="previewH4">Delete this document?</Text>
          <Text fontStyle="previewPara">
            Are you sure you want to delete the ‘<span>{fileName}</span>’
            document and its contents? This action cannot be reversed.
          </Text>
          <Button width="100%" >
            <Text fontStyle="headingMed">Confirm & Delete</Text>
          </Button>
          </VStack>
        </Container>
      </DeleteBox>
    </Background>
  );
};

export default DeleteDocument;
