import React from 'react';
import moment from 'moment';
import Patient1 from '../../assets/images/patient1.jpg';
import { List, Item, Avatar, Section } from './styles';

function ListGroupComponent({ groups }) {
  return (
    <List>
      {groups &&
        groups.map((group) => (
          <Item className='card d-flex mb-2'>
            <div className='d-flex'>
              <div className='col-2 px-0 d-flex justify-content-center'>
                <Avatar src={Patient1} alt='patient-avatar' className='img-fluid rounded-circle' />
              </div>
              <Section className='col-10 d-flex flex-column px-lg-2 px-md-2'>
                <div className='d-flex justify-content-between'>
                  <strong>{group.name}</strong>
                  <small>{moment(group.created_at).format('DD MMM, YYYY')}</small>
                </div>
                <p className='pt-1 mb-1'>{group.owner_id}</p>
                <span>{group.description}</span>
              </Section>
            </div>
          </Item>
        ))}
    </List>
  );
}

export default ListGroupComponent;
