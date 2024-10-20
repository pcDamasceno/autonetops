

export const Course = () => {
  return (
    <div id="webcrumbs"> 
        	<div className="w-[1000px] bg-white shadow-lg rounded-lg p-6">
    	  <div className="flex justify-between">
    	    <div className="w-3/4">
    	      <h1 className="text-2xl font-title font-bold text-neutral-950">
    	        Network Automation with Nornir: Mastering Network Tasks
    	      </h1>
    	      <p className="text-neutral-950 mt-3">
    	        Dive into network automation with Nornir, a flexible Python framework tailored for network engineers. In this concise and focused course, you’ll gain a solid understanding of Nornir's core utilities, and learn how to automate network tasks efficiently. We will cover integrating Nornir with NetBox for dynamic inventory management, using Jinja2 templates to generate configurations, and automating tasks with NAPALM. Through practical examples and hands-on exercises, you’ll be equipped to streamline network operations and manage devices with ease.
    	      </p>
    	      <div className="flex mt-6">
    	        <button className="bg-neutral-950 text-white px-6 py-3 rounded-md">
    	          Start Course
    	        </button>
    	        <button className="ml-3 px-6 py-3 border border-neutral-300 rounded-md text-neutral-950 flex items-center">
    	          <span className="material-symbols-outlined">share</span> Share
    	        </button>
    	      </div>
    	    </div>
    	    <div className="w-1/4 bg-neutral-100 rounded-lg h-[100px] flex items-center justify-center">
    	      <span className="material-symbols-outlined text-5xl text-neutral-400">
    	        menu_book
    	      </span>
    	    </div>
    	  </div>
    	  <div className="flex justify-between mt-6 border-t border-neutral-200 pt-6">
    	    <div className="flex items-center">
    	      <span className="material-symbols-outlined text-neutral-950 text-2xl mr-2">
    	        signal_cellular_alt
    	      </span>
    	      <div>
    	        <h3 className="text-neutral-500 text-sm">Difficulty Level</h3>
    	        <p className="text-neutral-950">Intermediate</p>
    	      </div>
    	    </div>
    	    <div className="flex items-center">
    	      <span className="material-symbols-outlined text-neutral-950 text-2xl mr-2">
    	        menu_book
    	      </span>
    	      <div>
    	        <h3 className="text-neutral-500 text-sm">No. of Chapters</h3>
    	        <p className="text-neutral-950">3</p>
    	      </div>
    	    </div>
    	    <div className="flex items-center">
    	      
    	      <div>
    	        <h3 className="text-neutral-500 text-sm">YouTube Video Included</h3>
    	        <p className="text-neutral-950">Yes</p>
    	      </div>
    	    </div>
    	    <div className="flex items-center">
    	      <span className="material-symbols-outlined text-neutral-950 text-2xl mr-2">
    	        quiz
    	      </span>
    	      <div>
    	        <h3 className="text-neutral-500 text-sm">Quiz Included</h3>
    	        <p className="text-neutral-950">No</p>
    	      </div>
    	    </div>
    	  </div>
    	  <h2 className="font-title font-bold text-neutral-950 text-lg mt-8">Chapters</h2>
    	  <div className="mt-4 space-y-4">
    	    <div className="bg-neutral-100 rounded-md p-4 flex items-start">
    	      <div className="bg-neutral-950 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center mr-4">
    	        1
    	      </div>
    	      <div>
    	        <h3 className="text-neutral-950 font-bold">Nornir Fundamentals and Configuration</h3>
    	        <p className="text-neutral-500 mt-1">
    	          This chapter introduces the Nornir framework and its core components. You'll learn how to set up Nornir, define device inventories, execute tasks, and manage data using Nornir's built-in utilities. We'll also explore best practices for writing clean and efficient Nornir scripts.
    	        </p>
    	      </div>
    	    </div>
    	    <div className="bg-neutral-100 rounded-md p-4 flex items-start">
    	      <div className="bg-neutral-950 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center mr-4">
    	        2
    	      </div>
    	      <div>
    	        <h3 className="text-neutral-950 font-bold">
    	          Integrating Nornir with NetBox and Jinja2
    	        </h3>
    	        <p className="text-neutral-500 mt-1">
    	          In this chapter, you’ll learn how to leverage NetBox, a popular network infrastructure management platform, to dynamically manage Nornir's device inventory for different network devices, ensuring consistency and reducing manual errors. We'll cover how to use Jinja2 templating to generate configuration files for devices.
    	        </p>
    	      </div>
    	    </div>
    	  </div>
    	</div> 
        </div>
  )
}

