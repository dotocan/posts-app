import { useEffect } from "react";

export const withLogger = (WrappedComponent: any) => {
  return (props: any) => {
    if (!props.message) {
      console.error(
        `Component ${WrappedComponent.displayName || WrappedComponent.name} doesn't have a message prop`
      );
    }

    const componentName =
      WrappedComponent.displayName || WrappedComponent.name || "Component";

    useEffect(() => {
      console.log(`${props.message} ${componentName}`);
    }, []);

    return <WrappedComponent {...props} />;
  };
};
