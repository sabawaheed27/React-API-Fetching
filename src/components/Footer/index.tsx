export default function Footer() {
    return (
        <footer className="bg-green-700 text-white py-4 mt-auto">
        <div className="text-center">
          &copy; {new Date().getFullYear()} RecipeFinder. All rights reserved.
        </div>
      </footer>
    );
  }
  