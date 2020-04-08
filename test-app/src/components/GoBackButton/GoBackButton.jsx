import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const GoBackButton = () => {
  const { goBack } = useHistory();

  return (
    <Button variant="light" className="mb-5" onClick={() => goBack()}>
      &larr; Back
    </Button>
  );
};

export default GoBackButton;
