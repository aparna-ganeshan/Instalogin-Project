import React from 'react'
import './LoginWithFb.css';

const LoginWithFb = () => {
    return (
        <>
            {/* <div>InstaPage</div> */}
            <div className='mainForm-container'>

                <form>
                    <div style={{ marginTop: '20px' }}>
                        <img src='https://th.bing.com/th/id/OIP.DexBeSiGPUP4igHscKierwHaCi?rs=1&pid=ImgDetMain' alt='' style={{ height: '', width: '200px' }} />
                    </div>

                <div className='text-p'>
                    <p> Sign up to see photos and videos from your friends.</p>
                </div>

                    <div>
                        <input className='input1' placeholder='Moblie Number, or Email' type='text' />
                    </div>

                    <div>
                        <input className='input2' placeholder='Password' type='password' />
                    </div>

                    <div>
                        <input className='input3' placeholder='Full name' type='password' />
                    </div>

                    <div>
                        <input className='input4' placeholder='Username' type='password' />
                    </div>
                    <div className='text-ptag1'>
                        <p> People who use our service may have uploaded your contact information to Instagram.<span>  Learn More </span></p>
                    </div>

                    <div className='text-ptag2'>
                        <p>By signing up, you agree to our <span> Terms ,  Privacy Policy  </span>and <span> Cookies Policy . </span></p>
                    </div>

                    <div>
                        <button className='sign-button'><b>Sign up</b></button>
                    </div>

                    
                </form>

                <div className='dontHaveAnAccountDiv'>
                    <p className='dontHaveAnAccount'>Don't have an account? <span>Log in</span></p>
                </div>

                <div>
                    <p style={{ fontSize: '14px' }}>Get the app.</p>
                </div>


                <div className='figuresDiv'>

                    <div className='figOne'>
                        <img src='https://th.bing.com/th/id/OIP.GZhmkG200Ppz-ezObC3JfQHaCi?w=2598&h=891&rs=1&pid=ImgDetMain' alt='' style={{ height: '50px', width: '170px' }} />
                    </div>

                    <div className='figOne'>
                        <img src='https://th.bing.com/th/id/OIP.TG7rJo1pUewli3FfEQCyPgHaCr?rs=1&pid=ImgDetMain' alt='' style={{ height: '44px', width: '140px', marginTop: '2px' }} />
                    </div>

                </div>

        
            </div>


            <div className='footerSection'>

                <div>Meta</div>
                <div>About</div>
                <div>Blog</div>
                <div>Jobs</div>
                <div>Help</div>
                <div>API</div>
                <div>Privacy</div>
                <div>Terms</div>
                {/* <div>Locations</div>
<div>Instagram Lite</div> */}
                <div>Threads</div>
                {/* <div>Contact Uploading & Non-Users</div> */}
                <div>Meta Verified</div>
                <div>English</div>
                <div>© 2024 Instagram from Meta</div>

            </div>

            <div className='secondFooter' style={{ marginTop: '10px' }}>
                <div>English</div>
                <div>© 2024 Instagram from Meta</div>
            </div>
        </>


    )
}

export default LoginWithFb