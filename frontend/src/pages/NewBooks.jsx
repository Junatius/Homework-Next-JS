import { Box } from "@chakra-ui/react";
import BookForm from "../components/BookForm";

function NewBookPage() {
  return (
    <Box>
      <BookForm />
    </Box>
  );
}

export default withAuth(NewBookPage);
