import React, { useState } from 'react';
import Dialog from '/components/Dialog';
import Image from 'next/image';
const Home = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => { 
    setDialogOpen(false);
  };

  return (
    <div>
<div className="flex justify-center mt-4">
    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={openDialog}>Open Dialog</button>
    </div>
      <Dialog open={dialogOpen} onClose={closeDialog}>
      <img src={'/profile.jpg'} className="rounded-full absolute profile" width={80} />
      <p className='mt-5'>
      I entered the field of programming since 2016 and
      started working by developing many projects.
      Interested in new technologies and topics, curious,
      committed and disciplined.
      </p>
      </Dialog>
    </div>
  );
};

export default Home;