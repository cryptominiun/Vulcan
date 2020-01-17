import React, { useState} from 'react';
import {
  getAuthorizedMenuItems,
  menuItemProps,
  registerComponent,
  withCurrentUser,
  Components,
} from 'meteor/vulcan:core';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MenuItem = (
  { name, label, path, onClick, labelToken, LeftComponent, RightComponent },
  { intl }
) => {
  let Wrapper = React.Fragment;
  if (path) {
    const LinkToPath = ({ children }) => <Link to={path}>{children}</Link>;
    Wrapper = LinkToPath;
  }
  return (
    <Wrapper key={name}>
      <li
        //selected={path && router.isActive(path)}
        onClick={onClick}>
        {LeftComponent && <LeftComponent />}
        <span>{label || intl.formatMessage({ id: labelToken })}</span>
        {RightComponent && <RightComponent />}
      </li>
    </Wrapper>
  );
};

MenuItem.propTypes = {
  ...menuItemProps,
  // parent can pass another onClick callback
  // eg to close the menu
  afterClick: PropTypes.func,
};

const style = {
}

const Layout = ({ children, currentUser }) => {
  const [open, setOpen] = useState(true)

  const backofficeMenuItems =
		getAuthorizedMenuItems(currentUser, 'vulcan-backoffice');

  const side = (
    <React.Fragment>
      <ul>{backofficeMenuItems.map(MenuItem)}</ul>
      <ul>{backofficeMenuItems.map(MenuItem)}</ul>
      <ul>{backofficeMenuItems.map(MenuItem)}</ul>
      <ul>{backofficeMenuItems.map(MenuItem)}</ul>
      <ul>{backofficeMenuItems.map(MenuItem)}</ul>
      <ul>{backofficeMenuItems.map(MenuItem)}</ul>
      <ul>{backofficeMenuItems.map(MenuItem)}</ul>
      <ul>{backofficeMenuItems.map(MenuItem)}</ul>
      <ul>{backofficeMenuItems.map(MenuItem)}</ul>
      <ul>{backofficeMenuItems.map(MenuItem)}</ul>
      <ul>{backofficeMenuItems.map(MenuItem)}</ul>
      <ul>{backofficeMenuItems.map(MenuItem)}</ul>
      <ul>{backofficeMenuItems.map(MenuItem)}</ul>
      <ul>{backofficeMenuItems.map(MenuItem)}</ul>
      <ul>{backofficeMenuItems.map(MenuItem)}</ul>
      <ul>{backofficeMenuItems.map(MenuItem)}</ul>
      <ul>{backofficeMenuItems.map(MenuItem)}</ul>
      <ul>{backofficeMenuItems.map(MenuItem)}</ul>
      <ul>{backofficeMenuItems.map(MenuItem)}</ul>
      <ul>{backofficeMenuItems.map(MenuItem)}</ul>
      <ul>{backofficeMenuItems.map(MenuItem)}</ul>
      <ul>{backofficeMenuItems.map(MenuItem)}</ul>
      <ul>{backofficeMenuItems.map(MenuItem)}</ul>
      <ul>{backofficeMenuItems.map(MenuItem)}</ul>
      <ul>{backofficeMenuItems.map(MenuItem)}</ul>
      <ul>{backofficeMenuItems.map(MenuItem)}</ul>
      <ul>{backofficeMenuItems.map(MenuItem)}</ul>
      <ul>{backofficeMenuItems.map(MenuItem)}</ul>
      <ul>{backofficeMenuItems.map(MenuItem)}</ul>
      <ul>{backofficeMenuItems.map(MenuItem)}</ul>
      <ul>{backofficeMenuItems.map(MenuItem)}</ul>
    </React.Fragment>
  );
  return (
    <div>
      {/* <button onClick={() => { setOpen(!open) }}>Burger menu</button> */}
			<Components.BackofficeNavbar />
      <Components.VerticalMenuLayout
				topPadding={56}
				side={side}
				main={children}
				open={open}
			/>
    </div>
  );
};

registerComponent({
  name: 'VulcanBackofficeLayout',
  component: Layout,
  hocs: [withCurrentUser],
});
