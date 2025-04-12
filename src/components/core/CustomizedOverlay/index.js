// /* eslint-disable no-unused-vars */
// import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import BOverlay from 'react-bootstrap/Overlay';

// const CustomizedOverlay = ({
//   children,
//   popoverRef,
//   show,
//   className,
//   placement,
//   onHide,
// }) => (
//   <BOverlay
//     target={popoverRef?.current}
//     rootClose
//     show={show}
//     placement={placement}
//     onHide={() => onHide(false)}
//   >
//     {({ arrowProps, show: _show, popper, style, ...props }) => (
//       <div
//         {...props}
//         className={className}
//         style={{
//           position: 'absolute',
//           ...style,
//         }}
//       >
//         {children}
//       </div>
//     )}
//   </BOverlay>
// );

// CustomizedOverlay.propTypes = {
//   children: PropTypes.any,
//   popoverRef: PropTypes.any,
//   show: PropTypes.bool,
//   className: PropTypes.string,
//   placement: PropTypes.string,
//   onHide: PropTypes.func,
// };

// CustomizedOverlay.defaultProps = {
//   children: null,
//   popoverRef: null,
//   show: false,
//   className: '',
//   placement: 'bottom',
//   onHide() {},
// };

// export default memo(CustomizedOverlay);
