import _ from "lodash-es";

type ClassValue = string | Record<string, boolean> | undefined | null;

export const cn = (...args: ClassValue[]): string => {
  return _.chain(args)
    .map((arg) => {
      if (_.isString(arg)) {
        return arg;
      } else if (_.isObject(arg)) {
        return _.chain(arg)
          .pickBy((value) => value)
          .keys()
          .value()
          .join(" ");
      }
      return "";
    })
    .compact()
    .join(" ")
    .value();
};
