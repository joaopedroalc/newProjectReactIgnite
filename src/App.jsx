import { Header } from "./components/Header"
import "./global.css"
import styles from "./App.module.css"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

const posts = [
  {
    id:1,
    author:{
      avatarUrl:"https://github.com/joaopedroalc.png",
      name: 'João Pedro Lima', 
      role: "Web Developer"
    },
    content: [
      {type: "paragraph", content:'Fala galeraa 👋'},
      {type: "paragraph", content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: "link", content:'👉 jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },  
  {
    id:2,
    author:{
      avatarUrl:"https://github.com/mohamed.png",
      name: 'Mohamed', 
      role: "Backend Developer"
    },
    content: [
      {type: "paragraph", content:'Fala galeraa 👋'},
      {type: "paragraph", content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: "link", content:'👉 jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-05-23 20:00:00')
  }
];

function App() {
  return (
    <div className="App">
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => {
              return (
                <Post
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}

export default App
