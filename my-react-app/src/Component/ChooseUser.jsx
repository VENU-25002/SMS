import React from 'react';
import { ChooseUserContainer, UserSection, Title, Button } from '../styles/ChooseUserStyles'; // Import styles
import { Link } from 'react-router-dom';
import './ChooseUser.css';

const ChooseUser = () => {
  return (
    <ChooseUserContainer>
      <UserSection>
        <Title>Admin</Title>
        <Link to="/admin-login"> {/* Updated link to point to AdminLogin page */}
          <Button>Login as Admin</Button>
        </Link>
      </UserSection>
      <UserSection>
        <Title>Student</Title>
        <Link to="/student-login"> {/* Updated link to point to StudentLogin page */}
          <Button>Login as Student</Button>
        </Link>
      </UserSection>
      <UserSection>
        <Title>Teacher</Title>
        <Link to="/teacher-login">
          <Button>Login as Teacher</Button>
        </Link>
      </UserSection>
      <UserSection>
        <Title>Parent</Title>
        <Link to="/parent-login"> {/* Added link to ParentLogin page */}
          <Button>Login as Parent</Button>
        </Link>
      </UserSection>
    </ChooseUserContainer>
  );
};

export default ChooseUser;
