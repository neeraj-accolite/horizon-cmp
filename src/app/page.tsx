import { Button, Icons } from '@shared-components';

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 sm:p-20">
      <h1>This is H1 TAG</h1>
      <h2>This is H2 TAG</h2>
      <h3>This is H3 TAG</h3>
      <h4>This is H4 TAG</h4>
      <h5>This is H5 TAG</h5>
      <h6>This is H6 TAG</h6>
      <Button label="Test Button" color="primary" />
      <div className="font-mono">This is sample font text</div>
      <div className="font-serif">This is sample serif text</div>
      <div className="font-sans">This is sample sans text</div>
      <div>This is sample default text</div>
      <Icons.LocalOffer />
    </div>
  );
}
