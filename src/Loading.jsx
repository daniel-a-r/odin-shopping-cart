import Icon from '@mdi/react';
import { mdiLoading } from '@mdi/js';

const Loading = () => {
  return (
    <>
      <Icon path={mdiLoading} size={2.5} spin={true} />
      <h1>Loading...</h1>
    </>
  );
};

export default Loading;
