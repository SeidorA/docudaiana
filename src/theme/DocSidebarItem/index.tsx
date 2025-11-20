import React from 'react';
import OriginalDocSidebarItem from '@theme-original/DocSidebarItem';
import { CaralIcon } from 'iconcaral2';

export default function DocSidebarItem(props) {
  const iconName = props.item?.metadata?.iconName;
  console.log(props.item?.metadata);

  return (
    <>
      {iconName ? (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          width: '100%'
        }}>
          <CaralIcon name={iconName} size="m" />
          <OriginalDocSidebarItem {...props} />
        </div>
      ) : (
        
        <OriginalDocSidebarItem {...props} />
      )}
    </>
  );
}
