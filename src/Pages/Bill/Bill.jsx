import React from 'react';
import Layout from '../../Layout/Layout';
import Counter from '../../Components/Counter';
import Location from './Location';

const Bill = () => {
    return (
      <>
        <div className="relative mt-6">
          <Location />
          <Location />

          <Counter />
        </div>
      </>
    );
}

export default Bill;
