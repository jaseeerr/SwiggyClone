const Footer =()=>{
    return (
        <>
        <footer class="bg-gray-900 text-white py-8 mt-auto">
    <div class="container mx-auto flex justify-between items-center">
      <div class="flex items-center">
        <img src="your-logo.png" alt="YourRestaurant Logo" class="h-8"/>
        <h1 class="text-xl ml-2">YourRestaurant</h1>
      </div>
      <nav>
        <ul class="flex space-x-4">
          <li><a href="#" class="text-gray-400 hover:text-white">About</a></li>
          <li><a href="#" class="text-gray-400 hover:text-white">Services</a></li>
          <li><a href="#" class="text-gray-400 hover:text-white">Contact</a></li>
          <li><a href="#" class="text-gray-400 hover:text-white">Terms of Use</a></li>
          <li><a href="#" class="text-gray-400 hover:text-white">Privacy Policy</a></li>
        </ul>
      </nav>
      <div class="flex items-center">
        <a href="#" class="text-gray-400 hover:text-white mx-2"><i class="fab fa-facebook"></i></a>
        <a href="#" class="text-gray-400 hover:text-white mx-2"><i class="fab fa-twitter"></i></a>
        <a href="#" class="text-gray-400 hover:text-white mx-2"><i class="fab fa-instagram"></i></a>
      </div>
    </div>
  </footer>

        </>
    )
}

export default Footer