import React, { useEffect, useState } from 'react';
import {
  FaProcedures,
  FaUsers,
  FaWallet,
  FaAmbulance,
  FaEllipsisH,
  FaHome,
  FaHeartbeat,
  FaBrain,
  FaCut,
} from 'react-icons/fa';
import { getToken } from '../../services/auth';
import jwtDecode from 'jwt-decode';
import { Container } from './styles';
import { Chart } from 'react-google-charts';

function Home() {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const token = getToken();
    if (token !== null && token !== 'undefined') {
      const { data } = jwtDecode(token);
      console.log(data, 'data');
      const { username } = data;
      setUsername(username.split(' ')[0]);
    }
  }, []);

  return (
    <Container className='container-fluid pb-xl-0 pt-xl-4 px-xl-5 py-lg-3 px-xl-4 px-md-3 py-md-3 p-0'>
      <div class='page-title '>
        <div class='row justify-content-between align-items-center'>
          <div class='col-md-6 col-12 mb-1 mb-md-0 px-4 px-md-3'>
            <h5 class='h3 font-weight-400 mb-0 '>
              Ola, <span className='text-primary'>{username}</span>{' '}
            </h5>
            <span class='text-sm opacity-8'>Tenha um bom dia!</span>
          </div>
        </div>
      </div>
      <div className='row pt-2 pt-md-3'>
        <div className='col-xl-3 col-md-6 col-sm-12 '>
          <div className='card d-flex flex-row  justify-content-between card-info py-1 px-4 mb-lg-4 mb-md-3 mb-3'>
            <div className='card-detail d-flex flex-row align-items-center justify-content-between py-3'>
              <div className='icon purple'>
                <FaProcedures size='28' color='#713BDB' />
              </div>
              <div className='d-flex  flex-column card-description py-3 px-4'>
                <strong>3,256</strong>
                <span>Total Patients</span>
              </div>
            </div>
            <div className='card-more py-1'>
              <div className='more d-flex flex-column'>
                <FaEllipsisH size='18' color='#C6CAD5' />
              </div>
            </div>
          </div>
        </div>
        <div className='col-xl-3 col-md-6 col-sm-12 '>
          <div className='card d-flex flex-row  justify-content-between card-info py-1 px-4 mb-lg-4 mb-md-3 mb-3'>
            <div className='card-detail d-flex flex-row align-items-center justify-content-between py-3'>
              <div className='icon blue'>
                <FaUsers size='28' color='#4AB8FF' />
              </div>
              <div className='d-flex  flex-column card-description py-3 px-4'>
                <strong>394</strong>
                <span>Available Staff</span>
              </div>
            </div>
            <div className='card-more py-1'>
              <div className='more d-flex flex-column'>
                <FaEllipsisH size='18' color='#C6CAD5' />
              </div>
            </div>
          </div>
        </div>
        <div className='col-xl-3 col-md-6 col-sm-12 '>
          <div className='card d-flex flex-row  justify-content-between card-info py-1 px-4 mb-lg-4 mb-md-3 mb-3'>
            <div className='card-detail d-flex flex-row align-items-center justify-content-between py-3'>
              <div className='icon orange'>
                <FaWallet size='28' color='#FF8B58' />
              </div>
              <div className='d-flex  flex-column card-description py-3 px-4'>
                <strong>2,536</strong>
                <span>Avg Treat. Costs</span>
              </div>
            </div>
            <div className='card-more py-1'>
              <div className='more d-flex flex-column'>
                <FaEllipsisH size='18' color='#C6CAD5' />
              </div>
            </div>
          </div>
        </div>
        <div className='col-xl-3 col-md-6 col-sm-12 '>
          <div className='card d-flex flex-row  justify-content-between card-info py-1 px-4 mb-lg-4 mb-md-3 mb-3'>
            <div className='card-detail d-flex flex-row align-items-center justify-content-between py-3'>
              <div className='icon red'>
                <FaAmbulance size='28' color='#FC5180' />
              </div>
              <div className='d-flex  flex-column card-description py-3 px-4'>
                <strong>38</strong>
                <span>Available Cars</span>
              </div>
            </div>
            <div className='card-more py-1'>
              <div className='more d-flex flex-column'>
                <FaEllipsisH size='18' color='#C6CAD5' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row d-flex align-items-stretch'>
        <div className='col-xl-9 col-md-12 pb-4'>
          <div className='card d-flex flex-column chart-area'>
            <div className='chart-header d-flex justify-content-between px-4 py-3'>
              <div className='chart-title'>
                <strong>Outpatients vs. Inpatients Trend</strong>
              </div>
              <div className='chart-order'>
                <span>Show by months</span>
              </div>
            </div>
            <div className='chart-body px-4 py-5'>
              <div className='row'>
                <div className='col-xl-8 col-md-12 '>
                  <Chart
                    chartType='Bar'
                    loader={<div>Loading Chart</div>}
                    data={[
                      ['', '2010 Population', '2000 Population'],
                      ['New York City, NY', 8175000, 8008000],
                      ['Los Angeles, CA', 3792000, 3694000],
                      ['Chicago, IL', 2695000, 2896000],
                      ['Houston, TX', 2099000, 1953000],
                      ['Philadelphia, PA', 1526000, 1517000],
                    ]}
                    options={{
                      title: 'Population of Largest U.S. Cities',
                      chartArea: { width: '100%' },
                      colors: ['#33D69F', '#2884FF'],
                      legend: { position: 'none' },
                    }}
                  />
                </div>
                <div className='col-xl-4 col-sm-12'>
                  <Chart
                    chartType='PieChart'
                    loader={<div>Loading Chart</div>}
                    data={[
                      ['Pizza', 'Popularity'],
                      ['2010 Population', 55], // Below limit.
                      ['2000 Population', 45], // Below limit.
                    ]}
                    options={{
                      chartArea: { width: '100%', height: '70%', top: 0 },
                      colors: ['#33D69F', '#2884FF'],
                      sliceVisibilityThreshold: 0.1,
                      pieHole: 0.8,
                      legend: {
                        position: 'bottom',
                        textStyle: { color: '#262d41', fontSize: 13, bold: true },
                      },
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-xl-3 col-md-12 pb-4'>
          <div className='card gender-area'>
            <div className='gender-header px-4 py-3'>
              <strong>Patients by Gender</strong>
            </div>
            <div className='gender-body px-4 py-5'>
              <Chart
                chartType='PieChart'
                loader={<div>Loading Chart</div>}
                data={[
                  ['Gender', 'Quantity'],
                  ['Female', 35], // Below limit.
                  ['Male', 65], // Below limit.
                ]}
                options={{
                  colors: ['#FE8B56', '#2884FF'],
                  sliceVisibilityThreshold: 0.2,
                  chartArea: { width: '100%', height: '70%', top: 0 },
                  pieHole: 0.8,
                  legend: {
                    position: 'bottom',
                    textStyle: { color: '#262d41', fontSize: 13, bold: true },
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-xl-6 col-md-12 pb-4 pb-lg-0'>
          <div className='card time-area'>
            <div className='time-header d-flex justify-content-between px-4 py-3'>
              <strong>Time Admitted</strong>
              <span>Today</span>
            </div>
            <div className='time-body px-4 py-3'>
              <Chart
                chartType='LineChart'
                loader={<div>Carregando...</div>}
                data={[
                  ['Time', 'Admitted'],
                  [0, 0],
                  [1, 10],
                  [2, 23],
                  [3, 17],
                  [4, 18],
                  [5, 9],
                  [6, 11],
                  [7, 27],
                ]}
                options={{
                  animation: { duration: 1500, startup: true, easing: 'inAndOut' },
                  chartArea: { width: '100%', height: '80%', top: 0 },
                  legend: { position: 'none' },
                  colors: ['#FE8B56'],
                  hAxis: { gridlines: { count: 0 }, baselineColor: 'none', ticks: [] },
                  vAxis: { gridlines: { count: 0 }, baselineColor: '#F4F5F7', ticks: [] },
                  curveType: 'function',
                }}
              />
            </div>
          </div>
        </div>
        <div className='col-xl-3 col-md-6 pb-4 pb-lg-0'>
          <div className='card division-area'>
            <div className='division-header px-4 py-3'>
              <strong>Patients By Division</strong>
            </div>
            <div className='division-body px-4 py-3'>
              <ul className='division-list'>
                <li className='division-item d-flex justify-content-between pb-4 pt-1'>
                  <div className='label'>
                    <FaHome size='22' color='#C5C9D4' />
                    <span>Division</span>
                  </div>
                  <strong>PT.</strong>
                </li>
                <li className='division-item d-flex justify-content-between pb-4'>
                  <div className='label'>
                    <FaHeartbeat size='22' color='#C5C9D4' />
                    <span>Cardiolody</span>
                  </div>
                  <div className='value'>
                    <strong>247</strong>
                  </div>
                </li>
                <li className='division-item d-flex justify-content-between pb-4'>
                  <div className='label'>
                    <FaBrain size='22' color='#C5C9D4' />
                    <span>Neurology</span>
                  </div>
                  <div className='value'>
                    <strong>164</strong>
                  </div>
                </li>
                <li className='division-item d-flex justify-content-between pb-2'>
                  <div className='label'>
                    <FaCut size='22' color='#C5C9D4' />
                    <span>Surgery</span>
                  </div>
                  <div className='value'>
                    <strong>84</strong>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='col-xl-3 col-md-6 pb-4 pb-lg-0'>
          <div className='card month-area '>
            <div className='month-header px-4 py-3'>
              <strong>Patients By Month</strong>
            </div>
            <div className='month-body px-4 py-3'>
              <Chart
                chartType='LineChart'
                loader={<div>Carregando...</div>}
                data={[
                  ['Time', 'Admitted'],
                  [0, 0],
                  [1, 10],
                  [2, 23],
                  [3, 17],
                  [4, 18],
                  [5, 9],
                  [6, 11],
                  [7, 27],
                ]}
                options={{
                  animation: { duration: 1500, startup: true, easing: 'inAndOut' },
                  chartArea: { width: '100%', height: '80%', top: 0 },
                  legend: { position: 'none' },
                  colors: ['#2884FF'],
                  curveType: 'function',
                  hAxis: { gridlines: { count: 0 }, baselineColor: 'none', ticks: [] },
                  vAxis: { gridlines: { count: 0 }, baselineColor: '#F4F5F7', ticks: [] },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Home;
