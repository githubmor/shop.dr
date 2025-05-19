type Props = {
  children: React.ReactNode;
};

function PagesLayout({ children }: Props) {
  return (
    <div className="tes w-full px-4 lg:px-24 py-6 ">
      <hr />
      {children}
    </div>
  );
}

export default PagesLayout;
