const If = (props) => {
  if (!!props.condition) {
    return props.children;
  }
  return null;
};

const OtherWise = (props) => {
  return <>{props.children}</>;
};

const When = (props) => {
  return <>{props.children}</>;
};

const Choose = (props) => {
  let toReturn = null;

  if (Array.isArray(props.children)) {
    const { children } = props;
    for (let index = 0; index < children.length; index++) {
      const el = children[index];
      if (el.type.name === "When" && el.props.condition) {
        return el;
      }
    }
  } else {
    if (props.children.props.condition) {
      return props.children;
    }
  }

  for (let index = 0; index < props.children.length; index++) {
    const el = props.children[index];
    if (el.type.name === "OtherWise") {
      return el;
    }
  }

  return toReturn;
};

export { Choose, When, OtherWise, If };
