<template>
  <div class="file" @dragover="dragover" @dragleave="dragleave" @drop="drop">
    <div>Banner *</div>
    <br/>
    <input
      type="file"
      multiple
      name="fields[assetsFieldHandle][]"
      id="assetsFieldHandle"
      class="w-px h-px opacity-0 overflow-hidden absolute"
      @change="onChange"
      ref="fileV"
      accept=".pdf,.jpg,.jpeg,.png"
    />

    <label for="assetsFieldHandle" class="filelabel">
      <div class="icon-text p-jc-center">
        <p>+</p>
        <p>Add Image</p>
      </div>
    </label>

    <div class="file-list mt-2" v-if="this.filelist.length" v-cloak>
      <p class="pm-txt-color modal-content">Uploaded files</p>
      <li
        class="text-sm p-1 p-d-flex p-ai-center"
        v-for="file of filelist"
        :key="file.name"
      >
        <div class="p-d-flex icon-name">
          <img :src="require('@/assets/icons/upload-icon.svg')" alt="" />
          <div class="file-details">
            <p class="file-name pm-text-color">{{ file.name }}</p>
            <div class="time-size p-d-flex">
              <p class="time lt-txt-color">Uploaded: 22/10/2021</p>
              <p class="size lt-txt-color">Size: 120kb</p>
            </div>
          </div>
        </div>
        <img
          class="icon"
          @click="remove(filelist.indexOf(file))"
          :src="require('@/assets/icons/upload-icon.svg')"
          alt=""
        />
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: "Fileupload",
  data() {
    return {
      filelist: [],
    };
  },
  methods: {
    onChange() {
      this.filelist = [...this.filelist, ...this.$refs.fileV.files];
    },
    remove(i) {
      this.filelist.splice(i, 1);
    },
    dragover(event) {
      event.preventDefault();
      // Add some visual fluff to show the user can drop its files
      if (!event.currentTarget.classList.contains("bg-green-300")) {
        event.currentTarget.classList.remove("bg-gray-100");
        event.currentTarget.classList.add("bg-green-300");
      }
    },
    dragleave(event) {
      // Clean up
      event.currentTarget.classList.add("bg-gray-100");
      event.currentTarget.classList.remove("bg-green-300");
    },
    drop(event) {
      event.preventDefault();
      this.$refs.file.files = event.dataTransfer.files;
      this.onChange(); // Trigger the onChange event manually
      // Clean up
      event.currentTarget.classList.add("bg-gray-100");
      event.currentTarget.classList.remove("bg-green-300");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/global.scss";
[v-cloak] {
  display: none;
}

.file-list {
  width: 100%;

  li {
    gap: 1rem;
    justify-content: space-between;
    border-bottom: 1px solid $light-text-color;

    .icon-name {
      gap: 1rem;
      padding: 1rem 0;
      align-items: center;
    }

    .file-name {
      margin: 0;
      font-size: 0.875rem;
    }

    .time-size {
      gap: 0.5rem;
      margin-top: 0.5rem;

      .time {
        border-right: 1px solid $light-text-color;
        padding-right: 0.5rem;
      }

      .time,
      .size {
        font-size: 0.75rem;
        margin: 0;
      }
    }

    .icon {
      cursor: pointer;
    }
  }
}

.title {
  font-size: 1.25rem;
}

.content {
  .heading {
    font-size: 0.875rem;
  }
}

.file {
  margin-top: 1.5rem;

  .icon-text {
    gap: 1rem;

    .text {
      margin: 0;
      font-size: 0.875rem;

      span {
        color: $primary-color;
      }
    }
  }
}

.modal-foodter {
  gap: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .close {
    margin: 0;
    cursor: pointer;
  }
}

.filelabel{
    width: 20%;
    border: 1px solid #CED4DA;
    display: block;
    padding: 1.5rem 1rem;
    transition: border 300ms ease;
    cursor: pointer;
    text-align: center;
}
</style>