<template>
  <div class="azolikCategoryCard">
    <div>
      <AzolikCategoryCard
        :title="'Umumiy hodimlar'"
        :man="'350'"
        :dataCenter="'500'"
        :woman="'150'"
      />
    </div>

    <div>
      <AzolikCategoryCard
        :title="'Ishga kelganlar'"
        :man="'250'"
        :dataCenter="'400'"
        :woman="'150'"
        :variant="'green'"
      />
    </div>

    <div>
      <AzolikCategoryCard
        :title="'Umumiy hodimlar'"
        :man="'350'"
        :dataCenter="'500'"
        :woman="'150'"
        :variant="'orange'"
      />
    </div>

    <div>
      <AzolikCategoryCard
        :title="'Umumiy hodimlar'"
        :man="'350'"
        :dataCenter="'500'"
        :woman="'150'"
        :variant="'dark-yellow'"
      />
    </div>

    <div>
      <AzolikCategoryCard
        :title="'Umumiy hodimlar'"
        :man="'350'"
        :dataCenter="'500'"
        :woman="'150'"
        :variant="'danger'"
      />
    </div>

    <div>
      <AzolikCategoryCard
        :title="'Umumiy hodimlar'"
        :man="'350'"
        :dataCenter="'500'"
        :woman="'150'"
        :variant="'pink'"
      />
    </div>

    <div>
      <AzolikCategoryCard
        :title="'Umumiy hodimlar'"
        :man="'350'"
        :dataCenter="'500'"
        :woman="'150'"
        :variant="'green'"
      />
    </div>
  </div>

  <el-row gutter="20">
    <el-col :span="7" :xs="24" :lg="7" :sm="24">
      <div class="select-azolik">
        <div class="label">Tuman (shahar)</div>
        <div>
          <select>
            <option>Quyidagilardan tanlang ...</option>
            <option>Quyidagilardan tanlang ...</option>
            <option>Quyidagilardan tanlang ...</option>
          </select>
        </div>
      </div>

      <div class="box-card">
        <apexchart
          height="250"
          type="donut"
          :options="donutOptions"
          :series="donutSeries"
        ></apexchart>
        <div class="series">
          <div class="series__item">
            <div class="series__item--round"></div>
            <div class="series__item--title">Erkak xodimlar</div>
          </div>
          <div class="series__item">
            <div class="series__item--round2"></div>
            <div class="series__item--title">Ayol xodimlar</div>
          </div>
        </div>
      </div>

      <div class="box-card">
        <div>
          <apexchart width="380" type="donut" :options="ageOptions" :series="ageSeries"></apexchart>
        </div>
      </div>

      <div class="box-card">
        <div class="oliyMalumotliChart">
          <div style="display: flex">
            <apexchart
              width="200"
              height="200"
              type="donut"
              :options="oliyMalumotOptions"
              :series="oliyMalumotSeries"
            ></apexchart>

            <div>
              <div style="margin-bottom: 31px">
                <div class="oliyMalumotliTitle">Oliy ma’lumotli: 75%</div>
                <div div style="display: flex">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_874_1121)">
                        <path
                          d="M9.99992 4.00002C10.2626 3.99996 10.5227 3.94815 10.7654 3.84755C11.0081 3.74696 11.2286 3.59955 11.4143 3.41374C11.6001 3.22793 11.7474 3.00736 11.8478 2.76462C11.9483 2.52188 12 2.26173 11.9999 1.99902C11.9998 1.73631 11.948 1.47619 11.8474 1.2335C11.7468 0.990817 11.5994 0.77032 11.4136 0.584603C11.2278 0.398886 11.0072 0.251585 10.7645 0.151111C10.5218 0.0506373 10.2616 -0.00104216 9.99891 -0.0009765C9.46835 -0.000843884 8.95957 0.21005 8.58449 0.58531C8.20942 0.96057 7.99878 1.46946 7.99892 2.00002C7.99905 2.53059 8.20994 3.03937 8.5852 3.41444C8.96046 3.78952 9.46935 4.00016 9.99992 4.00002ZM15.9779 11.583C15.5929 9.80802 14.9199 6.89502 13.9359 5.68902C12.9789 4.51602 11.0509 4.46702 9.99992 4.46702C8.94892 4.46702 7.02092 4.51602 6.06392 5.68902C5.07992 6.89502 4.40691 9.80802 4.02191 11.583C3.80891 12.566 5.17592 12.927 5.53292 11.938C6.06392 10.465 6.47392 9.22802 7.37192 8.20202C7.84392 11.109 6.10192 16.168 5.99992 19C5.99975 19.2338 6.08148 19.4602 6.23091 19.64C6.38035 19.8198 6.58804 19.9415 6.8179 19.984C7.04776 20.0266 7.28526 19.9873 7.48915 19.8729C7.69303 19.7585 7.8504 19.5764 7.93392 19.358C8.39091 17.771 9.99992 13.355 9.99992 13.355C9.99992 13.355 11.6089 17.771 12.0659 19.358C12.1494 19.5764 12.3068 19.7585 12.5107 19.8729C12.7146 19.9873 12.9521 20.0266 13.1819 19.984C13.4118 19.9415 13.6195 19.8198 13.7689 19.64C13.9184 19.4602 14.0001 19.2338 13.9999 19C13.8979 16.168 12.1559 11.109 12.6279 8.20302C13.5259 9.22902 13.9359 10.466 14.4669 11.939C14.8229 12.927 16.1909 12.566 15.9779 11.583Z"
                          fill="#393D52"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_874_1121">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div class="titleManOrWomen">70</div>
                  <div style="margin-left: 20px">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.2499 2.25632C12.2499 3.50247 11.2426 4.51265 9.99999 4.51265C8.75744 4.51265 7.75008 3.50247 7.75008 2.25632C7.75008 1.01019 8.75744 0 9.99999 0C11.2426 0 12.2499 1.01019 12.2499 2.25632ZM7.2501 8.52389C7.2501 9.79275 6.08225 14.062 5.65467 15.5826C5.57317 15.8724 5.76236 16.1689 6.0593 16.2136C9.05273 16.6652 10.9494 16.6503 13.9426 16.2107C14.2389 16.1672 14.4298 15.8741 14.3509 15.5844C13.9281 14.0342 12.7511 9.62077 12.7499 8.5256V8.52389V7.76918C12.9487 8.02023 13.1343 8.39358 13.2482 8.79726L13.2592 8.83602C13.3288 9.08226 13.3549 9.17482 13.3795 9.26783C13.3943 9.32389 13.4086 9.38004 13.4314 9.47005C13.4957 9.72351 13.6281 10.2453 14.0328 11.7875C14.1733 12.3231 14.7202 12.6431 15.2543 12.5021C15.7883 12.3611 16.1074 11.8127 15.9668 11.2771C15.5819 9.81005 15.445 9.27179 15.3746 8.99521C15.3025 8.71167 15.3003 8.7032 15.1725 8.25053C15.0001 7.64057 14.7066 7.01266 14.3104 6.51476C13.9365 6.04489 13.3238 5.51546 12.4999 5.51546H9.99999H7.50009C6.67613 5.51546 6.06355 6.04489 5.68962 6.51476C5.29338 7.01266 4.99985 7.64057 4.82755 8.25053C4.69966 8.7032 4.69751 8.71162 4.62541 8.99516C4.55507 9.27174 4.41817 9.80995 4.03319 11.2771C3.89259 11.8127 4.21163 12.3611 4.74571 12.5021C5.27978 12.6431 5.82666 12.3231 5.96726 11.7875C6.37194 10.2453 6.50428 9.72351 6.56858 9.47005C6.59138 9.38004 6.60563 9.32384 6.62048 9.26783C6.64503 9.17487 6.67123 9.08226 6.74077 8.83607L6.75172 8.79726C6.86577 8.39358 7.05131 8.02018 7.2501 7.76918V8.52389ZM7.2501 19.2478V17.3338C7.95482 17.4385 8.60679 17.5046 9.24377 17.5331L8.72364 19.4457C8.62479 19.8092 8.27296 20.0433 7.90052 19.9933C7.52814 19.9433 7.2501 19.6246 7.2501 19.2478ZM11.2764 19.4457L10.7554 17.5299C11.3926 17.499 12.0449 17.431 12.7499 17.3269V19.2478C12.7499 19.6246 12.4719 19.9433 12.0994 19.9933C11.7271 20.0433 11.3752 19.8092 11.2764 19.4457Z"
                        fill="#393D52"
                      />
                    </svg>
                  </div>
                  <div class="titleManOrWomen">5</div>
                </div>
              </div>

              <div>
                <div class="oliyMalumotliTitle">Oliy ma’lumotli: 75%</div>
                <div style="display: flex">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_874_1121)">
                        <path
                          d="M9.99992 4.00002C10.2626 3.99996 10.5227 3.94815 10.7654 3.84755C11.0081 3.74696 11.2286 3.59955 11.4143 3.41374C11.6001 3.22793 11.7474 3.00736 11.8478 2.76462C11.9483 2.52188 12 2.26173 11.9999 1.99902C11.9998 1.73631 11.948 1.47619 11.8474 1.2335C11.7468 0.990817 11.5994 0.77032 11.4136 0.584603C11.2278 0.398886 11.0072 0.251585 10.7645 0.151111C10.5218 0.0506373 10.2616 -0.00104216 9.99891 -0.0009765C9.46835 -0.000843884 8.95957 0.21005 8.58449 0.58531C8.20942 0.96057 7.99878 1.46946 7.99892 2.00002C7.99905 2.53059 8.20994 3.03937 8.5852 3.41444C8.96046 3.78952 9.46935 4.00016 9.99992 4.00002ZM15.9779 11.583C15.5929 9.80802 14.9199 6.89502 13.9359 5.68902C12.9789 4.51602 11.0509 4.46702 9.99992 4.46702C8.94892 4.46702 7.02092 4.51602 6.06392 5.68902C5.07992 6.89502 4.40691 9.80802 4.02191 11.583C3.80891 12.566 5.17592 12.927 5.53292 11.938C6.06392 10.465 6.47392 9.22802 7.37192 8.20202C7.84392 11.109 6.10192 16.168 5.99992 19C5.99975 19.2338 6.08148 19.4602 6.23091 19.64C6.38035 19.8198 6.58804 19.9415 6.8179 19.984C7.04776 20.0266 7.28526 19.9873 7.48915 19.8729C7.69303 19.7585 7.8504 19.5764 7.93392 19.358C8.39091 17.771 9.99992 13.355 9.99992 13.355C9.99992 13.355 11.6089 17.771 12.0659 19.358C12.1494 19.5764 12.3068 19.7585 12.5107 19.8729C12.7146 19.9873 12.9521 20.0266 13.1819 19.984C13.4118 19.9415 13.6195 19.8198 13.7689 19.64C13.9184 19.4602 14.0001 19.2338 13.9999 19C13.8979 16.168 12.1559 11.109 12.6279 8.20302C13.5259 9.22902 13.9359 10.466 14.4669 11.939C14.8229 12.927 16.1909 12.566 15.9779 11.583Z"
                          fill="#393D52"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_874_1121">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div class="titleManOrWomen">70</div>
                  <div style="margin-left: 20px">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.2499 2.25632C12.2499 3.50247 11.2426 4.51265 9.99999 4.51265C8.75744 4.51265 7.75008 3.50247 7.75008 2.25632C7.75008 1.01019 8.75744 0 9.99999 0C11.2426 0 12.2499 1.01019 12.2499 2.25632ZM7.2501 8.52389C7.2501 9.79275 6.08225 14.062 5.65467 15.5826C5.57317 15.8724 5.76236 16.1689 6.0593 16.2136C9.05273 16.6652 10.9494 16.6503 13.9426 16.2107C14.2389 16.1672 14.4298 15.8741 14.3509 15.5844C13.9281 14.0342 12.7511 9.62077 12.7499 8.5256V8.52389V7.76918C12.9487 8.02023 13.1343 8.39358 13.2482 8.79726L13.2592 8.83602C13.3288 9.08226 13.3549 9.17482 13.3795 9.26783C13.3943 9.32389 13.4086 9.38004 13.4314 9.47005C13.4957 9.72351 13.6281 10.2453 14.0328 11.7875C14.1733 12.3231 14.7202 12.6431 15.2543 12.5021C15.7883 12.3611 16.1074 11.8127 15.9668 11.2771C15.5819 9.81005 15.445 9.27179 15.3746 8.99521C15.3025 8.71167 15.3003 8.7032 15.1725 8.25053C15.0001 7.64057 14.7066 7.01266 14.3104 6.51476C13.9365 6.04489 13.3238 5.51546 12.4999 5.51546H9.99999H7.50009C6.67613 5.51546 6.06355 6.04489 5.68962 6.51476C5.29338 7.01266 4.99985 7.64057 4.82755 8.25053C4.69966 8.7032 4.69751 8.71162 4.62541 8.99516C4.55507 9.27174 4.41817 9.80995 4.03319 11.2771C3.89259 11.8127 4.21163 12.3611 4.74571 12.5021C5.27978 12.6431 5.82666 12.3231 5.96726 11.7875C6.37194 10.2453 6.50428 9.72351 6.56858 9.47005C6.59138 9.38004 6.60563 9.32384 6.62048 9.26783C6.64503 9.17487 6.67123 9.08226 6.74077 8.83607L6.75172 8.79726C6.86577 8.39358 7.05131 8.02018 7.2501 7.76918V8.52389ZM7.2501 19.2478V17.3338C7.95482 17.4385 8.60679 17.5046 9.24377 17.5331L8.72364 19.4457C8.62479 19.8092 8.27296 20.0433 7.90052 19.9933C7.52814 19.9433 7.2501 19.6246 7.2501 19.2478ZM11.2764 19.4457L10.7554 17.5299C11.3926 17.499 12.0449 17.431 12.7499 17.3269V19.2478C12.7499 19.6246 12.4719 19.9433 12.0994 19.9933C11.7271 20.0433 11.3752 19.8092 11.2764 19.4457Z"
                        fill="#393D52"
                      />
                    </svg>
                  </div>
                  <div class="titleManOrWomen">5</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="series">
          <div class="series__item">
            <div class="series__item--round"></div>
            <div class="series__item--title">Erkak xodimlar</div>
          </div>
          <div class="series__item">
            <div class="series__item--round2"></div>
            <div class="series__item--title">Ayol xodimlar</div>
          </div>
        </div>
      </div>
    </el-col>
    <el-col :span="10" :xs="24" :lg="10" :sm="24"></el-col>
    <el-col :span="7" :xs="24" :lg="7" :sm="24"></el-col>
  </el-row>
</template>

<script setup lang="ts">
const donutOptions = {
  type: 'pie',
  chart: {
    height: 300
  },
  legend: {
    display: false,
    show: false
  },
  plugins: {},
  colors: ['#02C39A', '#004E89'],

  responsive: [
    {
      breakpoint: 280,
      options: {
        chart: {
          height: 300
        }
      }
    }
  ]
}

const donutSeries = [61, 39]

const ageOptions = {
  type: 'pie',
  chart: {
    height: 300
  },
  series: [
    {
      name: '20 yoshgacha',
      data: [30, 40]
    }
  ],
  labels: ['20 yoshgacha', '20 dan 30 yoshgacha', '30 dan 40 yoshgacha', '40 yoshdan kattalar'],
  colors: ['#FDE802', '#FF9B9E', '#02C11A', '#7367F0'],

  responsive: [
    {
      breakpoint: 280,
      options: {
        chart: {
          height: 300
        }
      }
    }
  ]
}

const ageSeries = [72, 14, 28, 36]

const oliyMalumotOptions = {
  type: 'pie',
  chart: {
    height: 240,
    width: 140
  },
  legend: {
    display: true,
    show: false
  },

  colors: ['#28DAC6', '#7367F0'],

  responsive: [
    {
      breakpoint: 140,
      options: {
        chart: {
          height: 142
        }
      }
    }
  ]
}

const oliyMalumotSeries = [25, 75]
</script>

<style lang="scss">
.azolikCategoryCard {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 20px;

  gap: 20px;

  @include breakpoint('md') {
    grid-template-columns: repeat(3, 1fr);
  }

  @include breakpoint('lg') {
    grid-template-columns: repeat(7, 1fr);
  }
}

.select-azolik {
  font-family: $base-font;
  margin-bottom: 20px;
}
select {
  width: 100%;
  padding: 15px;
  background: #eaf0f7;
  border-radius: 6px;
  border: none;
  cursor: pointer;
}

.label {
  font-family: $base-font;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.3px;
  color: $color-grey;
  margin-bottom: 6px;
}

.box-card {
  width: 100%;
  padding: 22px;
  border-radius: 10px;
  background: $color-white;
  font-family: $base-font;
  color: #151f4a;
  margin-bottom: 20px;
  overflow: hidden;

  &__title {
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    text-transform: uppercase;
  }
}

.series {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  &__item {
    display: flex;
    align-items: center;
    gap: 7px;

    &--round {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #004e89;
    }
    &--round2 {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #02c39a;
    }
    &--title {
      font-family: $base-font;
      font-size: 12px;
      font-weight: 700;
      color: #4f4f4f;
    }
  }
}

.oliyMalumotliChart {
  display: flex;
  align-items: center;
}

.oliyMalumotliTitle {
  color: #393d52;
  font-family: $base-font;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 20px;
}

.titleManOrWomen {
  color: #6e6b7b;
  font-family: $base-font;
  font-weight: 500;
  line-height: 18px;
  margin-left: 5px;
}
</style>
