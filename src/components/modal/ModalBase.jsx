import { Modal ,Button, Form, FloatingLabel } from 'react-bootstrap';
import React, {useState} from 'react';
import Input from '../form/Input'
import {useQuery, useMutation} from '@apollo/client'
import { GET_CATEGORIES } from '../../graphql/Queries'
import { ADD_DOCUMENT } from '../../graphql/Mutations'

function ModalBase({...props}) {
    
    const [input, setInput] = useState({
      textNumber: '',
      name: '',
      releaseDate: '',
      expirationDate: '',
      description: '',
      internalNotes: '',
      type: null,
      file: {},
    
    })
    // const [file, setFile] = useState()

    const handleChangeInput = e => {
      setInput({
        ...input,
        [e.target.name]: e.target.value
      })
    }

    // mutation

    const [ createDocument, dataMutation ] = useMutation(ADD_DOCUMENT, 
         {
           onCompleted: data => console.log(data)
         }
      )
    console.log(createDocument)
    
    // change file
    const handleChangeFile = e => {
          const ref_file = e.target.files[0]
          if(!ref_file) return 
          setInput({
            ...input,
            file: ref_file
          })
         

    }
    console.log(input)

    // create
    const handleCreate = () => {
      
      console.log(input.file)
      createDocument({
        variables:{
          data: {
             textNumber: input.textNumber,
             name: input.name,
             releaseDate: input.releaseDate,
             expirationDate: input.expirationDate,
             description: input.description,
             internalNotes: input.internalNotes,
             type: input.type,
          },
          file: input.file
        }
       
       
      })
      
     
      if (dataMutation.error){
        console.log(dataMutation.error)
      }
    }
    // update
    const handleUpdate = () => {
      alert('update')
    }
    // modal
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // get categories
    const {loading, error, data} = useQuery(GET_CATEGORIES)
    
    const categories = !loading && !error? data.categories : []
    
    return (
      <>
        <span style={{cursor:'pointer'}} variant="spanrimary" onClick={handleShow}>
          {props.text}
        </span>
  
        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{props.heading}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Input label='Số tài liệu' name="textNumber" type="text" value={input.textNumber} onChange={handleChangeInput}/>
              <Input label='Tên tài liệu' name="name" type="text" value={input.name} onChange={handleChangeInput}/>
              <Input label='Ngày phát hành' name="releaseDate" type="date" value={input.releaseDate} onChange={handleChangeInput} />
              <Input label='Ngày hết hạn' name="expirationDate" type="date" value={input.expirationDate} onChange={handleChangeInput}/>
              <Form.Select name="type" onChange={handleChangeInput}>
                <option>---Loại tài liệu---</option>
                {
                  categories.map(item => (
                    <option key={item.id} value={item.id} >{item.name}</option>
                  ))
                }
              </Form.Select>
              <br/>
              <FloatingLabel controlId="floatingTextarea2" label="Trích yếu nội dung ">
                <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: '100px' }}
                name="description"
                value={input.description}
                onChange={handleChangeInput}
                />
               </FloatingLabel>
               <br/>
               <Input label='Ghi chú' name="internalNotes" type="text" value={input.internalNotes} onChange={handleChangeInput}/>
               <Input label='Tập tin đính kèm' name="file" type="file"  onChange={handleChangeFile}/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={props.action==='create'? handleCreate: handleUpdate}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default ModalBase