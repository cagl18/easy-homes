import React from 'react';
import AccountCard from './card/card';
import Button from '../../components/UI/button';
import { connect } from 'react-redux';
import { deleteCurrentUser } from '../../../store/actions';

const deleteAccount = ({ auth, deleteCurrentUser }) => {
  const cardBody = (
    <>
      <p className="u-margin-bottom-small">
        Once you delete your EasyHomes Account, it cannot be reactivated.
      </p>
      <Button
        className={'default btn-danger btn-sm'}
        loading={auth?.isFetching}
        // style={{ width: '110px !important' }}
        onClick={deleteCurrentUser}
      >
        Delete your account
      </Button>
    </>
  );

  return (
    <div className="account__deleteAccount">
      <AccountCard title="Delete Account">{cardBody}</AccountCard>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCurrentUser: () => dispatch(deleteCurrentUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(deleteAccount);
