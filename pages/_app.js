import '../globals.scss';

export default function App({ Component, pageProps }) {
  
  return (
    <div id="page_wrapper">
      <Component 
        {...pageProps} 
      />
    </div>
  )
}
