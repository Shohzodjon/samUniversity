// ilmiy, jahon, oquv, pre

let bookData = [
  {
    id: Math.random() * 1000,
    title: "Johon Doe",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deserunt unde corrupti officiis necessitatibus reprehenderit! Necessitatibus neque ab reprehenderit libero quisquam, commodi sequi amet dicta harum doloribus asperiores optio accusantium quo distinctio excepturi autem. Ducimus, recusandae eius. Sequi, pariatur, nesciunt, sapiente quae voluptate nostrum exercitationem eos laboriosam possimus cumque nihil?",
    filter: "jahon",
  },
  {
    id: Math.random() * 1000,
    title: "Joh Erik",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deserunt unde corrupti officiis necessitatibus reprehenderit! Necessitatibus neque ab reprehenderit libero quisquam, commodi sequi amet dicta harum doloribus asperiores optio accusantium quo distinctio excepturi autem. Ducimus, recusandae eius. Sequi, pariatur, nesciunt, sapiente quae voluptate nostrum exercitationem eos laboriosam possimus cumque nihil?",
    filter: "ilmiy",
  },
  {
    id: Math.random() * 1000,
    title: "Mike Mikel",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deserunt unde corrupti officiis necessitatibus reprehenderit! Necessitatibus neque ab reprehenderit libero quisquam, commodi sequi amet dicta harum doloribus asperiores optio accusantium quo distinctio excepturi autem. Ducimus, recusandae eius. Sequi, pariatur, nesciunt, sapiente quae voluptate nostrum exercitationem eos laboriosam possimus cumque nihil?",
    filter: "pre",
  },
  {
    id: Math.random() * 1000,
    title: "Math",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deserunt unde corrupti officiis necessitatibus reprehenderit! Necessitatibus neque ab reprehenderit libero quisquam, commodi sequi amet dicta harum doloribus asperiores optio accusantium quo distinctio excepturi autem. Ducimus, recusandae eius. Sequi, pariatur, nesciunt, sapiente quae voluptate nostrum exercitationem eos laboriosam possimus cumque nihil?",
    filter: "oquv",
  },
  {
    id: Math.random() * 1000,
    title: "Rich dad and Poor dad",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deserunt unde corrupti officiis necessitatibus reprehenderit! Necessitatibus neque ab reprehenderit libero quisquam, commodi sequi amet dicta harum doloribus asperiores optio accusantium quo distinctio excepturi autem. Ducimus, recusandae eius. Sequi, pariatur, nesciunt, sapiente quae voluptate nostrum exercitationem eos laboriosam possimus cumque nihil?",
    filter: "jahon",
  },
  {
    id: Math.random() * 1000,
    title: "Js",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deserunt unde corrupti officiis necessitatibus reprehenderit! Necessitatibus neque ab reprehenderit libero quisquam, commodi sequi amet dicta harum doloribus asperiores optio accusantium quo distinctio excepturi autem. Ducimus, recusandae eius. Sequi, pariatur, nesciunt, sapiente quae voluptate nostrum exercitationem eos laboriosam possimus cumque nihil?",
    filter: "jahon",
  },
  {
    id: Math.random() * 1000,
    title: "React JS",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deserunt unde corrupti officiis necessitatibus reprehenderit! Necessitatibus neque ab reprehenderit libero quisquam, commodi sequi amet dicta harum doloribus asperiores optio accusantium quo distinctio excepturi autem. Ducimus, recusandae eius. Sequi, pariatur, nesciunt, sapiente quae voluptate nostrum exercitationem eos laboriosam possimus cumque nihil?",
    filter: "oquv",
  },
  {
    id: Math.random() * 1000,
    title: "Python",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deserunt unde corrupti officiis necessitatibus reprehenderit! Necessitatibus neque ab reprehenderit libero quisquam, commodi sequi amet dicta harum doloribus asperiores optio accusantium quo distinctio excepturi autem. Ducimus, recusandae eius. Sequi, pariatur, nesciunt, sapiente quae voluptate nostrum exercitationem eos laboriosam possimus cumque nihil?",
    filter: "ilmiy",
  },
  {
    id: Math.random() * 1000,
    title: "Angular",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deserunt unde corrupti officiis necessitatibus reprehenderit! Necessitatibus neque ab reprehenderit libero quisquam, commodi sequi amet dicta harum doloribus asperiores optio accusantium quo distinctio excepturi autem. Ducimus, recusandae eius. Sequi, pariatur, nesciunt, sapiente quae voluptate nostrum exercitationem eos laboriosam possimus cumque nihil?",
    filter: "oquv",
  },
  {
    id: Math.random() * 1000,
    title: "Vue JS",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deserunt unde corrupti officiis necessitatibus reprehenderit! Necessitatibus neque ab reprehenderit libero quisquam, commodi sequi amet dicta harum doloribus asperiores optio accusantium quo distinctio excepturi autem. Ducimus, recusandae eius. Sequi, pariatur, nesciunt, sapiente quae voluptate nostrum exercitationem eos laboriosam possimus cumque nihil?",
    filter: "pre",
  },
  {
    id: Math.random() * 1000,
    title: "Go",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deserunt unde corrupti officiis necessitatibus reprehenderit! Necessitatibus neque ab reprehenderit libero quisquam, commodi sequi amet dicta harum doloribus asperiores optio accusantium quo distinctio excepturi autem. Ducimus, recusandae eius. Sequi, pariatur, nesciunt, sapiente quae voluptate nostrum exercitationem eos laboriosam possimus cumque nihil?",
    filter: "pre",
  },
  {
    id: Math.random() * 1000,
    title: "Johon Doe",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deserunt unde corrupti officiis necessitatibus reprehenderit! Necessitatibus neque ab reprehenderit libero quisquam, commodi sequi amet dicta harum doloribus asperiores optio accusantium quo distinctio excepturi autem. Ducimus, recusandae eius. Sequi, pariatur, nesciunt, sapiente quae voluptate nostrum exercitationem eos laboriosam possimus cumque nihil?",
    filter: "oquv",
  },
  {
    id: Math.random() * 1000,
    title: "HTML",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deserunt unde corrupti officiis necessitatibus reprehenderit! Necessitatibus neque ab reprehenderit libero quisquam, commodi sequi amet dicta harum doloribus asperiores optio accusantium quo distinctio excepturi autem. Ducimus, recusandae eius. Sequi, pariatur, nesciunt, sapiente quae voluptate nostrum exercitationem eos laboriosam possimus cumque nihil?",
    filter: "ilmiy",
  },
  {
    id: Math.random() * 1000,
    title: "CSS3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deserunt unde corrupti officiis necessitatibus reprehenderit! Necessitatibus neque ab reprehenderit libero quisquam, commodi sequi amet dicta harum doloribus asperiores optio accusantium quo distinctio excepturi autem. Ducimus, recusandae eius. Sequi, pariatur, nesciunt, sapiente quae voluptate nostrum exercitationem eos laboriosam possimus cumque nihil?",
    filter: "oquv",
  },
  {
    id: Math.random() * 1000,
    title: "Tailwindcss",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deserunt unde corrupti officiis necessitatibus reprehenderit! Necessitatibus neque ab reprehenderit libero quisquam, commodi sequi amet dicta harum doloribus asperiores optio accusantium quo distinctio excepturi autem. Ducimus, recusandae eius. Sequi, pariatur, nesciunt, sapiente quae voluptate nostrum exercitationem eos laboriosam possimus cumque nihil?",
    filter: "ilmiy",
  },
];

export default bookData;
