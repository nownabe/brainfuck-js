import * as React from "react";
import { connect } from "react-redux";
import { Action, Dispatch } from "redux";

import { change } from "actions/source";

const editor = ({ dispatch, source }: { dispatch: Dispatch<Action>, source: string }) => {
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(change(e.currentTarget.value));
  };

  return (
    <div id="editor">
      <textarea
        className="textarea"
        value={source}
        onChange={onChange}
      />
    </div>
  );
};

export default connect(
  ({ source }, ownProps) => ({ source }),
)(editor);
