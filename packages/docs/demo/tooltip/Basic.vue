<template>
  <div class="tooltip-base-box">
    <div class="row center">
      <bn-tooltip
        class="box-item"
        content="Top Left prompts info"
        placement="top-start"
      >
        <bn-button>top-start</bn-button>
      </bn-tooltip>
      <bn-tooltip
        class="box-item"
        content="Top Center prompts info"
        placement="top"
      >
        <bn-button>top</bn-button>
      </bn-tooltip>
      <bn-tooltip
        class="box-item"
        content="Top Right prompts info"
        placement="top-end"
      >
        <bn-button>top-end</bn-button>
      </bn-tooltip>
    </div>
    <div class="row">
      <bn-tooltip
        class="box-item"
        content="Left Top prompts info"
        placement="left-start"
      >
        <bn-button>left-start</bn-button>
      </bn-tooltip>
      <bn-tooltip
        class="box-item"
        content="Right Top prompts info"
        placement="right-start"
      >
        <bn-button>right-start</bn-button>
      </bn-tooltip>
    </div>
    <div class="row">
      <bn-tooltip
        class="box-item"
        content="Left Center prompts info"
        placement="left"
      >
        <bn-button class="mt-3 mb-3">left</bn-button>
      </bn-tooltip>
      <bn-tooltip
        class="box-item"
        content="Right Center prompts info"
        placement="right"
      >
        <bn-button>right</bn-button>
      </bn-tooltip>
    </div>
    <div class="row">
      <bn-tooltip
        class="box-item"
        content="Left Bottom prompts info"
        placement="left-end"
      >
        <bn-button>left-end</bn-button>
      </bn-tooltip>
      <bn-tooltip
        class="box-item"
        content="Right Bottom prompts info"
        placement="right-end"
      >
        <bn-button>right-end</bn-button>
      </bn-tooltip>
    </div>
    <div class="row center">
      <bn-tooltip
        class="box-item"
        content="Bottom Left prompts info"
        placement="bottom-start"
      >
        <bn-button>bottom-start</bn-button>
      </bn-tooltip>
      <bn-tooltip
        class="box-item"
        content="Bottom Center prompts info"
        placement="bottom"
      >
        <bn-button>bottom</bn-button>
      </bn-tooltip>
      <bn-tooltip
        class="box-item"
        content="Bottom Right prompts info"
        placement="bottom-end"
      >
        <bn-button>bottom-end</bn-button>
      </bn-tooltip>
    </div>
  </div>
</template>

<style>
.tooltip-base-box {
  width: 600px;
}
.tooltip-base-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tooltip-base-box .center {
  justify-content: center;
}
.tooltip-base-box .box-item {
  margin-right: 10px;
  margin-top: 10px;
}
</style>
