export default function Footer() {
    return (
      <footer className="py-10 text-center text-sm text-secondary dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-center gap-6 mb-4">
          <a href="#" className="hover:text-primary material-symbols-outlined">description</a>
          <a href="#" className="hover:text-primary material-symbols-outlined">insights</a>
        </div>
        <p>© {new Date().getFullYear()} All Rights Reserved.</p>
      </footer>
    )
  }
  