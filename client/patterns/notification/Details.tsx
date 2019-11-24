import React from 'react';

import DetailsLayout from '../../layouts/DetailsLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Circle from '../../placeholders/Circle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Notification">
            <div className="ph4 pv5">
                <BrowserFrame
                    content={
                        <div className="h-100 flex flex-column items-center justify-center">
                            <div className="b--black-30 ba br2 flex justify-between w-60">
                                <div className="pa3 w-80"><Block numberOfBlocks={5} /></div>
                                <button className="black-30 bn f2 flex h2 items-center justify-center w2" style={{ marginRight: '1px' }}>
                                    <Circle />
                                </button>
                            </div>
                        </div>
                    }
                    source={`
<div style="
    display: flex;
    justify-content: space-between;
">
    <!-- Content -->
    ...

    <!-- Close button sticks to the right -->
    ...
</div>
`}
                />
            </div>
        </DetailsLayout>
    );
};

export default Details;
