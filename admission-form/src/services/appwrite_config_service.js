import config from "../config/config.js";
import { Client, Databases, ID, Storage, Query } from "appwrite";

class ConfigService {
  client = new Client();
  databases;
  storage;

  constructor() {
    this.client
      .setEndpoint(config.AppwriteUrl)
      .setProject(config.AppwriteProjectId);
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async getLastStudent() {
    try {
      const response = await this.databases.listDocuments(
        config.AppwriteDatabaseId,
        config.AppwriteCollectionId
      );
      if (response.total > 0) {
        return response.total;
      } else {
        return null;
      }
    } catch (error) {
      console.error("Appwrite service :: getLastStudent :: error", error);
      throw error;
    }
  }

  async createStudent(studentData) {
    try {
      return await this.databases.createDocument(
        config.AppwriteDatabaseId,
        config.AppwriteCollectionId,
        ID.unique(),
        studentData
      );
    } catch (error) {
      console.error("Appwrite service :: createStudent :: error", error);
      throw error;
    }
  }

  // Admin-only methods
  async getStudent(id) {
    try {
      return await this.databases.getDocument(
        config.AppwriteDatabaseId,
        config.AppwriteCollectionId,
        id
      );
    } catch (error) {
      console.error("Appwrite service :: getStudent :: error", error);
      throw error;
    }
  }

  async getAllStudents() {
    try {
      return await this.databases.listDocuments(
        config.AppwriteDatabaseId,
        config.AppwriteCollectionId
      );
    } catch (error) {
      console.error("Appwrite service :: getAllStudents :: error", error);
      throw error;
    }
  }

  async searchStudents(query) {
    try {
      return await this.databases.listDocuments(
        config.AppwriteDatabaseId,
        config.AppwriteCollectionId,
        // [Query.contains("admission_no", query)]
        [
          Query.or([
            Query.contains("admission_no", query),
            Query.contains("stud_aadhaar_no", query),
            Query.contains("student_name", query),
          ]),
        ]
      );
    } catch (error) {
      console.error("Appwrite service :: searchStudents :: error", error);
      throw error;
    }
  }

  async updateStudent(id, updatedData) {
    try {
      return await this.databases.updateDocument(
        config.AppwriteDatabaseId,
        config.AppwriteCollectionId,
        id,
        updatedData
      );
    } catch (error) {
      console.error("Appwrite service :: updateStudent :: error", error);
      throw error;
    }
  }

  async deleteStudent(id) {
    try {
      await this.databases.deleteDocument(
        config.AppwriteDatabaseId,
        config.AppwriteCollectionId,
        id
      );
      return true;
    } catch (error) {
      console.error("Appwrite service :: deleteStudent :: error", error);
      throw error;
    }
  }

  // Photo upload method
  async uploadPhoto(file) {
    if (file.size / (1024 * 1024) > 2) {
      throw new Error("File size exceeds 2 MB.");
    }
    
    try {
      return await this.storage.createFile(
        config.AppwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.error("Appwrite service :: uploadPhoto :: error", error);
      throw error;
    }
  }
}

const configService = new ConfigService();

export default configService;
