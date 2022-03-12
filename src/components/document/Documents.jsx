import { useQuery } from '@apollo/client';
import { GET_DOCUMENT } from '../../graphql/Queries';
import {Table} from 'react-bootstrap'
import { Container } from 'react-bootstrap';
import Document from './Document';
import * as Icon from 'react-bootstrap-icons'
import ModalBase from '../modal/ModalBase';


const Documents = () => {
  // const [documents, setDocuments] = useState([])  
  // const { loading, error, data } = useQuery(GET_DOCUMENT);
 
  // if (loading) return 'Loading...';
  // if (error) return `Error! ${error.message}`;

  // const documents = !loading && !error ? data.files : []

  // console.log(data)


    return (
          <Container>
             <div className=''>
               <Icon.Plus size={24}/>
               <ModalBase
                text="Thêm tài liệu"
                heading="Thêm tài liệu" 
                action='create'         
               /></div>
             <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Số hiệu tài liệu</th>
                    <th>Tên tài liệu</th>
                    <th>File tài liệu</th>
                    <th>Loại tài liệu</th>
                    <th>Ngày phát hành</th>
                    <th>Ngày hết hạn</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {                      
                    documents.map(item => (
                          <Document key={item.id} document={item} />
                      ))                     
                  } */}
                </tbody>
              </Table>      
          </Container>   
    )
}

export default Documents