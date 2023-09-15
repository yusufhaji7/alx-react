import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  const objs = fromJS(object);
  const name = objs.getIn(array);
  return name;
}
