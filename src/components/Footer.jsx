const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="text-white bg-gray-950 ">
      <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-end">
          <p className="mt-4 text-center text-sm lg:mt-0 lg:text-right">
            Copyright &copy; {year} — Dibuat dengan ❤️ oleh{" "}
            <span className="font-semibold">Siwahyu</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
