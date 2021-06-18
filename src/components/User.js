import React, { useEffect, useReducer, useState } from 'react';

import {
  UserCard,
  CardTitle,
  UserCardContent,
  UserCardHeader,
  PageTitle,
  UserName,
  UserSurname,
  UserEmail,
  Grid,
  Loading,
  Flex,
} from './UserStyle';

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://speck-events-api.herokuapp.com/api/user')
      .then(res => res.json())
      .then(allUsers => setUsers(allUsers));
  }, []);
  return (
    <>
      <PageTitle>Speck Academy 2021.</PageTitle>
      <Grid>
        {users ? (
          users.map((user, key) => (
            <UserCard key={key}>
              <UserCardHeader>
                {user.isAdmin ? (
                  <CardTitle>Admin</CardTitle>
                ) : (
                  <CardTitle>Student</CardTitle>
                )}
              </UserCardHeader>

              <UserCardContent>
                <Flex>
                  <UserName>{user.firstName}</UserName>
                  <UserSurname>{user.lastName}</UserSurname>
                </Flex>
                <UserEmail>{user.email}</UserEmail>
              </UserCardContent>
            </UserCard>
          ))
        ) : (
          <Loading>Loading</Loading>
        )}
      </Grid>
    </>
  );
};

export default User;
