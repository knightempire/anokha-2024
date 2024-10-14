'use client';

const Container = ({ children }) => {
    return (
        <div className="max-w-[2480px] xl:px-20 md:px-10 sm:px-2 px-4 mx-auto">
            {children}
        </div>
    );
};

export default Container;
