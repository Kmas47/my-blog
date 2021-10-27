import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex flex-wrap justify-center items-center bg-green-600 bg-opacity-100 h-32">
      <div className="p-2 xl:p-4">
        <Link href="/cookie-policy">
          <a>
            <p className="text-white text-base font-normal">cookie policy</p>
          </a>
        </Link>
      </div>
      <div className="p-2 xl:p-4">
        <Link href="/privacy-policy">
          <a>
            <p className="text-white text-base font-normal">privacy policy</p>
          </a>
        </Link>
      </div>
      <div className="p-2 xl:p-4">
        <Link href="/terms-conditions">
          <a>
            <p className="text-white text-base font-normal">
              terms &amp; conditions
            </p>
          </a>
        </Link>
      </div>
    </div>
  );
};
