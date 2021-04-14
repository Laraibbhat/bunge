import React from 'react';
/*import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';*/

export const SidebarData = [
  {
    title: 'My Account',
    description:"Profile Info",
    path: '/userprofile',
   icon: <i class="fa fa-user" aria-hidden="true"style={{fontSize:"3.2rem"}}></i>,
    cName: 'nav-text'
  },
  {
    title: 'My Tasks',
    description:"Todo & Tasks",
    path: '/',
    icon: <i class="fa fa-tasks" aria-hidden="true"style={{fontSize:"3.2rem"}}></i>,
    cName: 'nav-text'
  },
  {
    title: 'My Events',
    description:'Logs & Notification',
    path: '/products',
    icon: <i class="fa fa-calendar"  aria-hidden="true" style={{fontSize:"3.2rem"}}></i>,
    cName: 'nav-text'
  }
  
];
