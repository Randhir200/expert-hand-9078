import React from 'react';
import './home.css';
import Header from './homeHeader';
import { FcGoogle } from 'react-icons/fc';
import { Heading, Box } from '@chakra-ui/react';
import headerImage from '../../assets/header__image.jpg';
import Slider from './Slider';

const Home = () => {
  return (
    <div className='Home__container'>
      <div className='Header__container'>
        <Header />

        <div className='header__button'>
          <button className='btn1'>Your work Email</button>
          <div className='btn2__container'>
            <button className='btn2'>START FOR FREE !</button>
            <p className='btn2__text'>14-day PRO trial included</p>
          </div>
        </div>

        <div className='Signin__google'>
          <i className='Signin__google-icon'>
            <FcGoogle />
          </i>
          <a href='#' className='Signin__google-link'>
            Sign in with Google
          </a>
        </div>
      </div>
      <div className='header__image'>
        <img src={headerImage} alt='headerImage' />
      </div>

      {/* ===========image slide show=========== */}
      <div className='slide__show'>
        <p>Companies of all shapes and sizes use TrackingTime</p>

        <div className='slide__container'>
          <Slider />
        </div>
      </div>

      <div className='feature__management__container'>
        <h2>THE FEATURES YOUR PROJECT MANAGEMENT APP IS MISSING</h2>

        <div className='featureCard__container'>
          <div className='featureCard'>
            <img
              src='https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/article-1.svg'
              alt='card'
            />
            <h2 className='featureCard__header'>
              Measure your team`s productivity
            </h2>
            <p>
              Get a record of the worked hours and keep your projects in order,
              be abreast of ongoing or completed projects with our super
              friendly app.
            </p>
          </div>

          <div className='featureCard'>
            <img
              src='https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/article-2.svg'
              alt='card'
            />
            <h2 className='featureCard__header'>
              The most flexible reporting engine
            </h2>
            <p>
              Project budgeting, client billing, payroll, productivity analytics
              and much more: No matter what kind of reports you need,
              TrackingTime has got you covered.
            </p>
          </div>

          <div className='featureCard'>
            <img
              src='https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/article-3.svg'
              alt='card'
            />
            <h2 className='featureCard__header'>
              Measure your team`s productivity
            </h2>
            <p>
              See every work in progress and measure the productivity of your
              team by monitoring them in real time
            </p>
          </div>
        </div>
      </div>

      {/* ============= */}

      <div className='businessApps__container'>
        <div className='businessApps__favourite'>
          <img
            src='https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/grupo.svg'
            alt='asdf'
          />
          <Heading>Add time tracking to your favorite business apps</Heading>
          <p>
            No matter where your employees work, TrackingTime works with them.
            Install the TrackingTime Button for Chrome and Firefox and track
            time right within the productivity apps your employees use everyday.
          </p>
          <button>SEE ALL</button>
        </div>

        <div className='appCard__container'>
          <div className='appCard'>
            <img
              src='https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/asana.png'
              alt='app'
            />
            <h2>Asana</h2>
            <p>
              Asana puts tasks and conversations together to enable teamwork
              without email.
            </p>
          </div>

          <div className='appCard'>
            <img
              src='https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/trello.png'
              alt='app'
            />
            <h2>Trello</h2>
            <p>
              Trello is a collaboration tool that organizes your projects into
              boards.
            </p>
          </div>

          <div className='appCard'>
            <img
              src='https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/todoist.png'
              alt='app'
            />
            <h2>Todoist</h2>
            <p>Todoist is a task manager thats useful, fast and easy to use.</p>
          </div>

          <div className='appCard'>
            <img
              src='https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/smartsheet.png'
              alt='app'
            />
            <h2>Smartsheet</h2>
            <p>
              Smartsheet is a web-based project and task management and work
              collaboration software.
            </p>
          </div>
        </div>
      </div>

      <div className='budgeting__container'>
        <div className='cards__container'>
          <div className='budgeting__cards'>
            <img
              src='https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/slider-1.svg'
              alt='asdf'
            />
            <h2>Timecards Approval</h2>
            <p>Track clock in and out times with no effort</p>
          </div>

          <div className='budgeting__cards'>
            <img
              src='https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/slider-2.svg'
              alt='asdf'
            />
            <h2>Budgeting</h2>
            <p>Keep your projects on time and budget.</p>
          </div>

          <div className='budgeting__cards'>
            <img
              src='https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/slider-3.svg'
              alt='asdf'
            />
            <h2>Work schedules</h2>
            <p>Specify when your employees are expected to be at their job.</p>
          </div>

          <div className='budgeting__cards'>
            <img
              src='https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/slider-4.svg'
              alt='asdf'
            />
            <h2>Timeshet Audits</h2>
            <p>Avoid data inconsistencies with just one click.</p>
          </div>
        </div>
      </div>

      <div className='timesheets__container'>
        <div className='timesheets__Image'>
          <img
            src='https://trackingtime.co/wp-content/themes/trackingtime-v4/img/home/bottom-action.svg'
            alt='sdf'
          />
        </div>

        <Box >
          <Heading fontSize={{base:'30px', lg:'50px'}}>Get professional timesheets done in no time!</Heading>
          <p>
            Sign up today and join thousands of people around the world using
            TrackingTime to simplify their timesheets.
          </p>

          <div className='header__button'>
            <button className='btn1'>Your work Email</button>
            <div className='btn2__container'>
              <button className='btn2'>START FOR FREE !</button>
              <p className='btn2__text'>14-dat PRO trial included</p>
            </div>
          </div>

          <div className='Signin__google'>
            <i className='Signin__google-icon'>
              <FcGoogle />
            </i>
            <a href='#' className='Signin__google-link'>
              Sign in with Google
            </a>
          </div>
        </Box>

        <div className='timesheets__container-background'>
          <img
            src='https://trackingtime.co/wp-content/themes/trackingtime-v3/img/keywords/lineas.png'
            alt='sadf'
          />
        </div>
      </div>

      <div className='getStarted__container'>
        <img
          src='https://trackingtime.co/wp-content/themes/trackingtime-v4/img/layout/footer/tt.svg'
          alt='sdf'
        />
        <h1>Get Started</h1>
        <h2>
          Sign up today and join thousands of people around the world using
          TrackingTime to make the most of their time.
        </h2>

        <div className='header__button'>
          <button className='btn1'>Your work Email</button>
          <div className='btn2__container'>
            <button className='btn2'>START FOR FREE !</button>
            <p className='btn2__text'>14-day PRO trial included</p>
          </div>
        </div>

        <div className='Signin__google'>
          <i className='Signin__google-icon'>
            <FcGoogle />
          </i>
          <a href='#' className='Signin__google-link'>
            Sign in with Google
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
