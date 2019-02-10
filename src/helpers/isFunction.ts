export default func => func && {}.toString.call(func) === '[object Function]';
