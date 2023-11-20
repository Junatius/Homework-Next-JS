import { VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Books from "../components/Books";
import { getAllBooks } from "../modules/fetch";
 
export async function getServerSideProps() {
  const res = await getAllBooks();
  const books = await res.json();
  console.log(books);
  return {
    props: {
      books
    }
  }
}

export default function Homepage({ books }) {
  return (
    <VStack w="100vw">
      {books?.map(book => (
        <Books key={`${book.id} ${book.title}`} {...book} />
      ))}
    </VStack>
  );
}
