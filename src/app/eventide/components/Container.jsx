'use client';

import PropTypes from 'prop-types';

const Container = ({ children, className = '' }) => {
    return (
        <div className={`max-w-[2480px] xl:px-20 md:px-10 sm:px-2 px-4 mx-auto ${className}`}>
            {children}
        </div>
    );
};

Container.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Container;
