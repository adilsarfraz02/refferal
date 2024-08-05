'use client';
import React from 'react';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from '@nextui-org/react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';

const DropdownNav = ({ user }) => {
  return (
    <div>
      <Dropdown>
        <DropdownTrigger>
          <Avatar
            classNames={{
              base: 'border-2 !border-zinc-700 focus:ring-2 ring-white',
            }}
            as='button'
            className='transition-transform'
            src={user.image}
          />
        </DropdownTrigger>
        <DropdownMenu
          aria-label='Profile Actions'
          variant='flat'>
          <DropdownItem
            key='profile'
            className='h-14 gap-2'>
            <p className='font-semibold'>Signed in as</p>
            <p className='font-semibold'>{user.email}</p>
          </DropdownItem>
          <DropdownItem key='settings'>
            <Link
              href='/dashboard'
              className='w-full'>
              Dashboard
            </Link>
          </DropdownItem>
          <DropdownItem key='privacy'>Privacy and Policy</DropdownItem>
          <DropdownItem key='help_and_feedback'>Help & Feedback</DropdownItem>
          <DropdownItem
            as='button'
            color='danger'>
            <button
              className='w-full text-left'
              onClick={() => {
                signOut();
              }}>
              Log Out
            </button>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default DropdownNav;
