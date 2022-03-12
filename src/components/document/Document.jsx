import {Button} from 'react-bootstrap'

const convertDate = param => {
    let date = new Date(param)
    let year = date.getFullYear()
    let month = date.getMonth()+1
    let dt = date.getDate()
    let dateConvert = `${dt}/${month}/${year}`
    return dateConvert
}
const Document = ({document}) => {

    const releaseDate = convertDate(document.releaseDate)
    const expirationDate = convertDate(document.expirationDate)
    return (
        <tr>
            <td>{document.textNumber}</td>
            <td>{document.name}</td>  
            <td><Button href={document.file} >xem</Button></td>
            <td>{document.type.name}</td>
            <td>{releaseDate}</td>
            <td>{expirationDate}</td>
            <td>Sửa | xoa</td>
        </tr>
    )
}

export default Document