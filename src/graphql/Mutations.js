import {gql} from '@apollo/client'

// export const ADD_DOCUMENT = gql`
//       mutation fileUpload(
//           $data: {
//                $textNumber: String
//                $name: String
//                $releaseDate: String
//                $expirationDate: String
//                $type: ID!
//                $description: String
//                $internalNotes: String
//           },
//           $file: Upload!
//       ){
//        fileUpload(data: $data, file: $file) {
//            file {
//                 file
//            }
//        } 
//     } 
// `;

export const ADD_DOCUMENT = gql`
  mutation(
    $data: FileInput!
    $file: Upload!
  ) {
    fileUpload(data: $data, file: $file) {
     file {
       id
       name
       file
     }
    }
  }
`;

