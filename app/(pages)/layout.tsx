type Props = {
  children: React.ReactNode;
};

function PagesLayout({ children }: Props) {
  return (
    <div className="w-full px-4 lg:px-24 pb-6 flex flex-col gap-4 ">
      <hr />
      {children}
    </div>
  );
}

export default PagesLayout;
