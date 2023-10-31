import './Item.css';

import { Note } from '../../../types';

type ItemProps = {
  favorite?: boolean;
} & Note;

export default function Item({ id, data }: ItemProps) {
  return (
    <div key={id}>
      <p className="data-paragraph">{data}</p>
    </div>
  );
}
