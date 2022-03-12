import {gql} from '@apollo/client'


export const GET_DOCUMENT = gql`{
    
    files {
        id
        name
        file
        textNumber
        releaseDate
        expirationDate
        createdAt
        updatedAt
        description
        internalNotes
        type {
            id
            name
        }
    }      
}`;


export const GET_CATEGORIES = gql`
    {
        categories {
            id
            name
        }
    }   
`;